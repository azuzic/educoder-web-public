<script setup>
import { globalStore, examStore, fileStore } from "@/main.js"  
</script>
<template>
    <div class="wh-full">

        <div class="grow flex-center" v-if="type == 'HTML'">
            <div class="flex gap-2 w-full justify-center items-center">
                HTML / CSS
                <div class="flex" @mouseover="globalStore.setTooltip('Color Picker', 'top', 'text-center')" @mouseleave="globalStore.setTooltip()">
                    <ColorPicker format="rgb" lang="En" :theme="globalStore.isDarkMode ? 'black' : 'white'" blur-close/>
                </div>
            </div>
        </div>

        <div class="grow flex-center" v-if="type == 'JS'">
            <div class="flex gap-2 w-full justify-center items-center">
                <i class="fa-solid fa-circle-question" 
                    @mouseover="globalStore.setTooltip('DO, WHILE i FOR <br> moraju imati vitičaste zagrade { }', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"> 
                </i>
                JavaScript
                <div v-if="examStore.codeAlert == 'loop'" class="text-orange-600 font-bold">
                    Max. broj iteracija dostignut!
                    <i class="fa-solid fa-arrows-spin"></i>
                </div>
                <div v-else-if="examStore.codeAlert == 'good'" class="text-green-600 font-bold">
                    OK!
                    <i class="fa-regular fa-square-check"></i>
                </div>
                <div v-else-if="examStore.codeAlert == 'error'" class="text-rose-600 font-bold">
                    Greške u kodu!
                    <i class="fa-solid fa-bug"></i>
                </div>
                <div v-else-if="examStore.codeAlert != 'OK'" class="text-yellow-600 font-bold">
                    <span class="text-rose-600">{{examStore.codeAlert }}</span> nema vitičaste zagrade!
                    <i class="fa-solid fa-warning"></i>
                </div>
            </div>
        </div>

        <div class="grow flex-center" v-if="type == 'PREVIEW'">
            <div class="cursor-pointer h-4 w-4 mr-1 rounded-full flex-center text-neutral-950 transition-150 relative text-[10px] bg-orange-500 hover:bg-orange-400">                
                <i class="fa-solid fa-arrows-rotate transition-150 absolute active:rotate-180" @click="examStore.resetView()"
                    @mouseover="globalStore.setTooltip('Resetiraj pregled', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>   
            </div>
            Pregled
        </div>

        <div class="grow flex-center" v-if="type == 'MARKDOWN'">
            <EC_Button v-if="examStore.examSet" class="pb-0 font-bold" @click="examStore.selectTask(examStore.currentSolution)"
                :disabled="examStore.markdownTab == 'task'" :bg="examStore.markdownTab == 'task' ? 'blue' : ''">Zadatak</EC_Button>
            <span v-if="examStore.examSet" class="px-1">/</span>
            <EC_Button v-if="examStore.examSet" class="pb-0 font-bold my-[3px]" @click="fileStore.loadScript(fileStore.selectedScript)"
                :disabled="examStore.markdownTab == 'script'" :bg="examStore.markdownTab == 'script' ? 'blue' : ''">Skripta</EC_Button>
            <span v-else="examStore.examSet" class="px-1">Skripta</span>
        </div>

        <div class="grow flex-center gap-2" v-if="type == 'LOG'">
            <div class="cursor-pointer h-4 w-6 rounded-full flex-center text-neutral-950 transition-150 relative text-xs"
                :class="globalStore.groupLogMessaged ? 'bg-green-600 hover:bg-green-500' : 'bg-sky-500 hover:bg-sky-400'">                
                <i class="fa-solid fa-link transition-150 absolute" @click="globalStore.groupLogMessaged = !globalStore.groupLogMessaged; globalStore.setTooltip('Grupiraj iste podatke', 'top', 'text-center');"
                    :class="globalStore.groupLogMessaged ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Odgrupiraj iste podatke', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>     
                <i class="fa-solid fa-link-slash transition-150 absolute" @click="globalStore.groupLogMessaged = !globalStore.groupLogMessaged; globalStore.setTooltip('Odgrupiraj iste podatke', 'top', 'text-center');"
                    :class="!globalStore.groupLogMessaged ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Grupiraj iste podatke', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>      
            </div>
            <div class="cursor-pointer h-4 w-6 rounded-full flex-center text-neutral-950 transition-150 relative text-xs"
                :class="globalStore.showConsoleVariableType ? 'bg-green-600 hover:bg-green-500' : 'bg-sky-500 hover:bg-sky-400'">                
                <i class="fa-solid fa-comment transition-150 absolute" @click="globalStore.showConsoleVariableType = !globalStore.showConsoleVariableType; globalStore.setTooltip('Prikaži tip podatka', 'top', 'text-center');"
                    :class="globalStore.showConsoleVariableType ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Sakrij tip podatka', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>     
                <i class="fa-solid fa-comment-slash transition-150 absolute" @click="globalStore.showConsoleVariableType = !globalStore.showConsoleVariableType; globalStore.setTooltip('Sakrij tip podatka', 'top', 'text-center');"
                    :class="!globalStore.showConsoleVariableType ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Prikaži tip podatka', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>      
            </div>
            Konzola
            <div class="cursor-pointer h-4 w-6 rounded-full flex-center text-neutral-950 transition-150 relative text-xs"
                :class="globalStore.consoleJSON ? 'bg-green-600 hover:bg-green-500' : 'bg-sky-500 hover:bg-sky-300'">                
                <i class="fa-solid fa-code transition-150 absolute" @click="globalStore.consoleJSON = !globalStore.consoleJSON; globalStore.setTooltip('Običan ispis', 'top', 'text-center');"
                    :class="globalStore.consoleJSON ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Formatirani ispis', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>     
                <i class="fa-solid fa-font transition-150 absolute" @click="globalStore.consoleJSON = !globalStore.consoleJSON; globalStore.setTooltip('Formatirani ispis', 'top', 'text-center');"
                    :class="!globalStore.consoleJSON ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Običan ispis', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"></i>      
            </div>
            <div class="cursor-pointer h-4 w-4 rounded-full flex-center text-neutral-950 transition-150 relative text-[11px] pr-[0.5px]"
                :class="[globalStore.consoleJSON ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
                    globalStore.consoleJSONdepth!=-1 ? 'bg-green-600 hover:bg-green-500' : 'bg-sky-500 hover:bg-sky-300']">    
                <i class="fa-solid fa-compress transition-150" @click="globalStore.consoleJSONdepth=-1;
                    globalStore.setTooltip('Smanji polja i objekte', 'top', 'text-center');"
                    :class="globalStore.consoleJSONdepth!=-1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Proširi polja i objekte', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"> 
                </i>
                <i class="fa-solid fa-expand transition-150 absolute" @click="globalStore.consoleJSONdepth=10;
                    globalStore.setTooltip('Proširi polja i objekte', 'top', 'text-center');" 
                    :class="globalStore.consoleJSONdepth==-1 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
                    @mouseover="globalStore.setTooltip('Smanji polja i objekte', 'top', 'text-center')"
                    @mouseleave="globalStore.setTooltip()"> 
                </i>
            </div>
        </div>
        
    </div>
</template>
<script>
import { globalStore } from "@/main.js"  
import "@/scripts/ace-config";

export default {
    name: "WindowTitles",    
    props: {
        type: String,
    },
}
</script>

<style lang="scss">
.vc-color-wrap {
    height: 18px !important;
    width: 36px !important;
    border: solid 1px #4b4b4b !important;
    border-radius: 4px !important;
}
.black {
    .vc-colorpicker--container {
        background-color: rgba(38, 38, 38, 0.5) !important;
    }
    .vc-lightness-slider__bar, .vc-alpha-slider__bar {
        outline: solid 1px #4b4b4b !important;
    }
    input {
        cursor: text !important;
        &:hover {
            background-color: #212121 !important;
        }
    }
    .vc-color-input, .vc-alpha-input, .vc-input-toggle {       
        * { color: #a9a9a9 !important; }
        color: #a9a9a9 !important;
    }
    .vc-compact, .vc-saturation {
        outline: solid 1px #4b4b4b !important;
        border-radius: 4px !important;
    }
    .vc-current-color, .vc-transparent, .vc-color-input, .vc-alpha-input, .color-item {
        max-height: 28px !important;
        border: solid 1px #4b4b4b !important;
        border-radius: 4px !important;
    }
    .vc-color-input, .vc-alpha-input {
        &:hover {
            background-color: #212121 !important;
        }
    }
    .copy-text {
        font-size: 14px !important;
        font-weight: bold !important;
        color: inherit !important;
        mix-blend-mode: difference !important;
        filter: invert(1) !important;
    }
    .vc-input-toggle {
        max-height: 28px !important;
        border: solid 1px #4b4b4b !important;
        border-radius: 4px !important;
        width: fit-content !important;
        &:hover {
            background-color: #212121 !important;
        }
    }
}
.white {
    .vc-lightness-slider__bar, .vc-alpha-slider__bar {
        outline: solid 1px #a9a9a9 !important;
    }
    input {
        cursor: text !important;
        &:hover {
            background: #dedede !important;
        }
    }
    .vc-color-input, .vc-alpha-input, .vc-input-toggle {       
        * { color: #353535 !important; }
        color: #353535 !important;
    }
    .vc-compact, .vc-saturation {
        outline: solid 1px #a9a9a9 !important;
        border-radius: 4px !important;
    }
    .vc-current-color, .vc-transparent, .vc-color-input, .vc-alpha-input, .color-item__display {
        max-height: 28px !important;
        border: solid 1px #a9a9a9 !important;
        border-radius: 4px !important;
    }
    .vc-color-input, .vc-alpha-input {
        &:hover {
            background: #dedede !important;
        }
    }
    .copy-text {
        font-size: 14px !important;
        font-weight: bold !important;
        color: inherit !important;
        mix-blend-mode: difference !important;
        filter: invert(1) !important;
    }
    .vc-input-toggle {
        max-height: 28px !important;
        border: solid 1px #a9a9a9 !important;
        border-radius: 4px !important;
        width: fit-content !important;
    }
}
</style>