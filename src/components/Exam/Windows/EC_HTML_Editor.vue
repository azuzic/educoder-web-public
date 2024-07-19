<script setup>
import { examStore } from "@/main.js";
</script>
<template>
	<v-ace-editor
		v-if="examStore.solutions.length > 0"
		v-model:value="examStore.solutions[examStore.currentSolution - 1].html_code"
		class="grow"
		:style="'font-size: ' + globalStore.HTMLfontSize + 'px;'"
		lang="html"
		:theme="globalStore.isDarkMode ? globalStore.selectedDarkTheme : globalStore.selectedLightTheme"
		@keyup="examStore.options.autoEvaluation ? examStore.evaluateCode() : ''"
		:options="{
			useWorker: true,
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true,
			tabSize: globalStore.HTMLtabSize,
		}"
		@init="setupEditor" />
    <span class="cursor-pointer absolute top-8 right-2"
        title="Kopiraj cijeli kôd" @click="copyCode">&#128203</span>
</template>
<script>
import { globalStore } from "@/main.js";
import "@/scripts/ace-config";
import { EXAM_MSGS } from "@/scripts/messages.js"

export default {
	name: "HomeView",
	setup() {
		return { globalStore };
	},
	data() {
		return {
			editorOptions: {
				useWorker: true,
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true,
				tabSize: globalStore.HTMLtabSize,
			},
		};
	},
	methods: {
        copyCode(event) {
            const code = examStore.solutions[examStore.currentSolution - 1].html_code;
            examStore.copiedCode = code;
            navigator.clipboard.writeText(code);

            event.target.textContent = '✅';
            
            setTimeout(() => {
                event.target.textContent = '📋';
            }, 1000);
        },        
		setupEditor(editor) {
			const maxPasteLength = 400;
			editor.on("paste", function (e) {
				const beforePasteContent = editor.getValue();
				setTimeout( async () => {
					const currentContent = editor.getValue();
                    const preventPaste = currentContent.length - beforePasteContent.length > maxPasteLength && examStore.antiCheatCopyPasteLimitEnabled;
					if (preventPaste && examStore.EDU_CODER_MODE != "SANDBOX") {
                        const clipboardText = e.text.replace(/\s*/g, "");
                        const copiedCode = examStore.copiedCode.replace(/\s*/g, "");
                        if (clipboardText != copiedCode) {
                            editor.setValue(beforePasteContent, 1);						
                            globalStore.pushPopup(EXAM_MSGS.EXAM_ANTI_CHEAT_MAX_PASTE_LIMIT__WARNING(maxPasteLength));	
                        }
                    }
				}, 1);
			});
		},
	},
};
</script>
