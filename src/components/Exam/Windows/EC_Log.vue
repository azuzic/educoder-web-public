<script setup>
import { examStore, globalStore } from "@/main.js"  
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
</script>
<template>
    <div id="EduCoderConsoleLogs" class="flex bg-white dark:bg-[#1D1F21] h-full overflow-auto font-mono" :style="`font-size: ${globalStore.LOGfontSize}px !important;`">
        <div class="bg-neutral-100 dark:bg-[#25282C] min-w-10 h-full absolute"></div>
        <div class="flex flex-col grow pl-1">
            <div v-for="log, i in formatedExamLogMessages()">
                <div v-if="log.type == 'log'" class="flex gap-2">
                    <div class="flex flex-col min-w-10 w-fit h-full z-10">
                            <div class="text-right text-black dark:text-gray-400 pr-3 whitespace-nowrap overflow-hidden">{{i+1}}</div>
                    </div>
                    <div class="flex gap-2 dark:opacity-80 w-full" :style="`* {  }`">
                        <div class="text-sky-600 dark:text-sky-400 whitespace-nowrap"><i class="fas fa-info-circle"></i> 
                            <span class="text-amber-600 dark:text-amber-400" v-if="globalStore.groupLogMessaged"> [{{log.count}}]</span> Console log:
                        </div>
                        <span v-if="globalStore.showConsoleVariableType">({{typeof log.msg == "undefined" ? "undefined" : typeof newValueFormatted(log.msg)}})</span>
                        <vue-json-pretty v-if="globalStore.consoleJSON" :itemHeight="globalStore.LOGfontSize+globalStore.LOGfontSize/2"
                            class="text-gray-500 dark:text-gray-300 w-full" style="font-size: inherit;"
                            :deep="globalStore.consoleJSONdepth" :data="newValueFormatted(log.msg)"/>
                        <div v-else class="text-gray-500 dark:text-gray-300 w-full">
                            {{ log.msg }}
                        </div>
                    </div>
                </div>
                <div v-else class="flex gap-2">
                    <div class="flex flex-col min-w-10 w-fit h-full z-10">
                            <div class="text-right text-black dark:text-gray-400 pr-3 whitespace-nowrap overflow-hidden">{{i+1}}</div>
                    </div>
                    <div class="flex gap-2 dark:opacity-90 w-full">
                        <div class="text-rose-600 dark:text-rose-400 whitespace-nowrap">
                            <template v-if="log.type == 'SyntaxError'">
                                <i class="fas fa-bug"></i>
                            </template>
                            <template v-else-if="log.type == 'ReferenceError'">
                                <i class="fas fa-exclamation-triangle"></i>
                            </template>
                            <template v-else-if="log.type == 'TypeError'">
                                <i class="fas fa-times-circle"></i>
                            </template>
                            <template v-else-if="log.type == 'RangeError'">
                                <i class="fas fa-exclamation-circle"></i>
                            </template>
                            <template v-else-if="log.type == 'InternalError'">
                                <i class="fas fa-ban"></i>
                            </template>
                            <template v-else>
                                <i class="fas fa-exclamation-circle"></i>
                            </template>
                            {{ log.type }}:
                        </div>
                        <div class="text-fuchsia-700 dark:text-fuchsia-400 w-full">{{ log.msg }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
    methods: {
        newValueFormatted(log) {
            try {                
                return JSON.parse(log)
            } catch (error) {
                if (log == undefined) return "undefined"
                return log
            }
        },
        formatedExamLogMessages() {
            // Initialize an empty object to store counts
            const logMessages = examStore.logMessages;
            const counts = {};

            // Iterate through logMessages array and count occurrences
            logMessages.forEach(message => {
                const key = JSON.stringify(message); // Use JSON.stringify to create a unique key for each object
                counts[key] = (counts[key] || 0) + 1;
            });

            // Create a new array with grouped objects and count field
            const groupedMessages = Object.keys(counts).map(key => {
                const obj = JSON.parse(key); // Parse the key back to an object
                return { ...obj, count: counts[key] };
            });
            return globalStore.groupLogMessaged ? groupedMessages : logMessages 
        }
    }
}
</script>