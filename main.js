function calculate() {
    var problem = document.form.textview.value;
    // const chars = problem.split('');
    var regex = /^[A-Za-z]+$/;
    if(problem === '') return
    if(problem.startsWith('+')||problem.startsWith('-')||problem.startsWith('*')||problem.startsWith('/')) return
    if(problem.endsWith('+')||problem.endsWith('-')||problem.endsWith('*')||problem.endsWith('/')) return
    const chars = problem.toLowerCase().split('');
    var isValid = regex.test(problem);
    if(isValid === true) return
    var solution = eval(problem);
    document.form.textview.value = solution; 
}

function clear(){
    document.form.textview.value = '';
}

function insert(key){
    document.form.textview.value += key;
}