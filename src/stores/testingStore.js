import { defineStore } from "pinia";
import { examStore } from "@/main.js";
import { wait } from "@/scripts/helpers.js";
import { testData } from "@/scripts/unitTesting.js";

export const useTestingStore = defineStore("testingStore", {
	state: () => ({
        tests: [],
        doneTests: [],
        stopTesting: false,
        slowUnitTestSpeed: 1,

        currentTestName: "",
        currentTest: 0,

        currentTestLength: 1,
        currentTestProgress: 0,
	}),
	actions: {
        async loadUnitTestData() {
            this.currentTestName = "";
            this.currentTest = 0;
            this.currentTestLength =  1;
            this.currentTestProgress =  0;
            this.tests = [];
            this.doneTests = [];
            for (let test of testData) {
                await fetch(test)
                    .then(response => response.text())
                    .then(data => this.tests.push({ title: test.replace(/\.txt.*/, '').replace(/\/.*\//, '').replace(/\_/g, ' '), data: data}))
                    .catch(error => console.error('Error:', error));
            }
        },
        checkForErrors(logMessages) {
            let foundError = false;
            for (let logMessage of logMessages) {
                if (logMessage.type != "log") {
                    foundError = true;
                    return `Type: ${logMessage.type} | Error: ${logMessage.msg}`;
                }
            }
            if (!foundError) return `OK!`;
        },      
        async fastUnitTest() {
            await this.loadUnitTestData();            
            for (let test of this.tests) {
                this.currentTest++;
                this.currentTestName = test.title;
                examStore.solutions[0].js_code = test.data;
                await examStore.evaluateCode();
                this.doneTests.push({title: test.title, status: this.checkForErrors(examStore.logMessages)});
                await wait(0);
            }
        },        
        async slowUnitTest() {
            await this.loadUnitTestData();
            for (let test of this.tests) {
                this.currentTest++;
                this.currentTestName = test.title;
                let code = "";
                this.currentTestLength = test.data.length;
                this.currentTestProgress = 0;
                for (let c of test.data) {
                    this.currentTestProgress++;
                    code+=c;
                    examStore.solutions[0].js_code = code;
                    await examStore.evaluateCode();
                    if (this.stopTesting) break;
                    if (code.length%this.slowUnitTestSpeed==0) await wait(0);
                }
                if (this.stopTesting) break;
                this.doneTests.push({title: test.title, status: this.checkForErrors(examStore.logMessages)});
            }
        },        
        async stopUnitTest() {
            this.stopTesting = true;
            await wait(0.1);
            this.stopTesting = false;
        }
	},
	persist: true,
});
