function solution(participant, completion) {
    let answer = '';
    let map = new Map();
    for(let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];
        map.set(a, (map.get(a) || 0) + 1);
    }}