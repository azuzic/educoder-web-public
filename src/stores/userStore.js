import { defineStore } from "pinia";
import { auth, signInWithPopup, GoogleAuthProvider, provider, signOut, db, collection, setDoc, getDoc, doc, updateDoc, arrayUnion } from "@/scripts/firebase.js";
import { globalStore, examStore } from "@/main.js";
import { isUnipuEmail } from "@/scripts/validators.js";
import { wait } from "@/scripts/helpers.js";
import { USER_MSGS } from "@/scripts/messages.js"

export const useUserStore = defineStore("userStore", {
	state: () => ({
		user: {},
		token: "",
		introductionDialogRead: false,
	}),
	actions: {
		async signInElectron() {    
			try {               
                signInWithPopup(auth, provider).then((result) => {
                    if (window !== undefined) {
                        window.location.href = 'educoder-electron://' + result._tokenResponse.oauthIdToken;
                    }
                }).catch((error) => {
				    globalStore.pushPopup(USER_MSGS.SIGN_IN__ERROR, false, 0, {location: "userStore - signIn(): ", message: error});
                });		
			} catch (error) {
				globalStore.pushPopup(USER_MSGS.SIGN_IN__ERROR, false, 0, {location: "userStore - signIn(): ", message: error});
			}
		},
		async signIn() { 
			try {
				const provider = new GoogleAuthProvider();
				const result = await signInWithPopup(auth, provider);
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				let tempUser = JSON.parse(JSON.stringify(user));
				if (!isUnipuEmail(user.email)) {
					globalStore.pushPopup(USER_MSGS.SIGN_IN_UNIPU__WARNING);
					localStorage.clear();
					return;
				}
				this.user = tempUser;
				this.token = token;

				const userExists = await this.checkUserExists(user.email);
				if (!userExists) await this.saveUserToFirestore({ email: user.email });
				await globalStore.resetDraggables();
				globalStore.pushPopup(USER_MSGS.SIGN_IN__SUCCESS(user.email));
			} catch (error) {
				globalStore.pushPopup(USER_MSGS.SIGN_IN__ERROR, false, 0, {location: "userStore - signIn(): ", message: error});
			}
		},
		async checkUserExists(email) {
			try {
				const usersCollection = collection(db, "users");
				const userDoc = await getDoc(doc(usersCollection, email));
				return userDoc.exists();
			} catch (error) {
				globalStore.pushPopup(USER_MSGS.USER_CHECK__ERROR, false, 0, {location: "userStore - checkUserExists(): ", message: error});
				return false;
			}
		},
		async saveUserToFirestore(user) {
			try {
				const usersCollection = collection(db, "users");
				await setDoc(doc(usersCollection, user.email), {
                    acessedExams: [],
                    email: user.email,
                    class: "PJS",
                    userType: "redovan"
                });

				globalStore.pushPopup(USER_MSGS.USER_LOGIN__SUCCESS(user.email));
			} catch (error) {
                globalStore.pushPopup(USER_MSGS.USER_CHECK__ERROR, false, 0, {location: "userStore - saveUserToFirestore(): ", message: error});
            }
		},
		async handleSignOut({ forceLogOut = false, EduCoderVersion = "" } = {}) {
            if (!forceLogOut) {
                let check = confirm("Jeste li sigurni da se želite odjaviti?");
                if (!check) return;
            }

			try {
				await signOut(auth);
				localStorage.clear();
				globalStore.pushPopup(USER_MSGS.SIGN_OUT__SUCCESS);
                globalStore.EduCoderVersion = EduCoderVersion != "" ? EduCoderVersion : globalStore.EduCoderVersion;
                await wait(0.1);
				window.location.reload();
			} catch (error) {
				localStorage.clear();
				globalStore.pushPopup(USER_MSGS.SIGN_OUT__ERROR, false, 0, {location: "userStore - saveUserToFirestore(): ", message: error});
                globalStore.EduCoderVersion = EduCoderVersion != "" ? EduCoderVersion : globalStore.EduCoderVersion;
                await wait(0.1);
				window.location.reload();
			}
		},
		async handleAuthStateChanged() {
			if (!this.user.email) return;
            if (!isUnipuEmail(this.user.email)) {
                globalStore.pushPopup(USER_MSGS.SIGN_IN_UNIPU__WARNING);
                this.user = {};
                this.token = token;
                localStorage.clear();
                return;
            }
            globalStore.pushPopup("success", `Dobrodošli ${this.user.email}!`);
            if (examStore.examInProgress) {
                const examExists = await examStore.isExamInitiated();
                if (examExists) {
                    examStore.endExam({ requireConfirmation: false });
                    globalStore.pushPopup(USER_MSGS.EXAM_LIMITED_ACCESS__WARNING);
                    return;
                }
            }
			
		},
	},
	persist: true,
});