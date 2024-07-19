function reformatCode(code) { 
    const code2 = code.replace(/(\s*)((for|if|while)\s*\([^)]*\)|function\s+\w+\s*\([^)]*\))\s*{/g, (match, p1, p2) => {
        return `${p1}${p2} {\n${p1}    `;
    }).replace(/(\s*)\s*\(([^)]+)\)/g, (match, spaces, condition) => {
        return `${spaces} (${condition.replace(/\n/g, "")})`;
    }).replace(/do{|do\s*{/g,'do {');
    return code2;
}
function checkBraces(code) {
    const lines = code.split('\n');
    let checkLine = function(regex, line) { if (regex.test(line)) return !line.includes('{'); return false }
    let types = ["do", "while", "for"]
    for (let i = 0; i < lines.length; i++) { 
        let line = lines[i];
        for (let t of types) {
            let regex = new RegExp(`^\\s*${t}(\\s+|\\()`);
            if (checkLine(regex, line)) return t;
        }
    }
    return "OK"
}
function checkTypes(types, line, incrementStatement, exitCondition) {
    let checkLine = function(regex, line) { if (regex.test(line)) return line.includes('{'); return false }
    for (let t of types) {
        let regex = new RegExp(`^\\s*${t}(\\s+|\\()*`);
        if (checkLine(regex, line)) return incrementStatement + exitCondition;
    } 
    return "";
}

function preventInfiniteLoop(jsCode, maxIterations) {
    const uniqueVarCounter = '__uniqueVarCounter__';
    const uniqueVarLoopDetected = '__uniqueVarLoopDetected__'
    const incrementStatement = `${uniqueVarCounter}++;`;
    const exitLoopCondition = `if (${uniqueVarCounter} > ${maxIterations} || ${uniqueVarLoopDetected}) { ${uniqueVarLoopDetected} = true; break;}\n`;
    const exitFunctionCondition = `if (${uniqueVarCounter} > ${maxIterations} || ${uniqueVarLoopDetected}) { ${uniqueVarLoopDetected} = true; return '__infinite_loop_detected__';}\n`;
    
    let modifiedCode = `var ${uniqueVarCounter} = 0;\nvar ${uniqueVarLoopDetected} = false;\n`;
    const lines = jsCode.split('\n');

    const loopTypes = ["do ", "while", "for"]
    const functionTypes = ["function.*\\(.*\\)", "=\\s*\\(.*|\\s*\\)=>"]
    
    for (let i = 0; i < lines.length; i++) {
        modifiedCode += lines[i];
        const line = lines[i].trim();

        modifiedCode += checkTypes(loopTypes, line, incrementStatement, exitLoopCondition)
        modifiedCode += checkTypes(functionTypes, line, incrementStatement, exitFunctionCondition)
        modifiedCode += "\n";
    }

    modifiedCode += `if (${uniqueVarCounter} > ${maxIterations} || ${uniqueVarLoopDetected}) return '__infinite_loop_detected__'; else return '__infinite_loop_not_detected__'`;
    return modifiedCode;
}

const scrollbarCSS = `a {pointer-events: none !important;}
:root{ --thumb: #2059c2;--thumbhover: #0ea5e9;--thumbbg: #06060a;}
::-webkit-scrollbar { width: 8px; height: 8px; }
html body::-webkit-scrollbar-track { background: var(--thumbbg); }
::-webkit-scrollbar-thumb { background: var(--thumb); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--thumbhover); }
::-webkit-scrollbar-corner { background: #00000000; }
::selection { color: var(--thumbbg); background: var(--thumb); }`;

export {reformatCode, checkBraces, preventInfiniteLoop, scrollbarCSS}