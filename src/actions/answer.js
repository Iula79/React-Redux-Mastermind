export function createAnswer(arr) {
    let answer = []
    
    for (let i = 0; i < 4; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        answer.push(arr[rand]);
    }
    
    return {
        type: 'CREATE_ANSWER',
        payload: answer
    }
}