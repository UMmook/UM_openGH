async function getUser(){
    try{
        const res = await axios.get('users'); // p194 아래 2줄
        const users = res.data;              // p195-1줄
        const list = document.getElementById('list');
        list.innerHTML = '';
        Object.keys(users).map(function(key){
            // p197 그림 4-9 이순신[수정][삭제], 
            //               안중근[수정][삭제]
            const userDiv = document.createElement('div');

            const span = document.createElement('span');
            span.textContent = users[key];   // 이순신, 안중근

            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async() => {
                const name = prompt('수정할 이름을 선택하세요');
                if(!name){ return alert('이름 입력 해야지요?'); }
                try{
                    await axios.put('/user/' + key, {name}); // p195 두번째 else if
                    getUser();                               // 수정된 내용으로 다시 그리기
                } catch(err) {
                    console.log(err);
                }
            });

            const remove = document.createElement('button');
            remove.textContent = '삭제';
            remove.addEventListener('click', async() => {
                const name = prompt('수정할 이름을 선택하세요');
                if(!name){ return alert('이름 입력 해야지요?'); }
                try{
                    await axios.delete('/user/' + key); // p195 밑에서 2줄
                    getUser();                          // 수정된 내용으로 다시 그리기
                } catch(err) {
                    console.log(err);
                }
            });

            userDiv.appendChild(span);   // 이순신, 안중근
            userDiv.appendChild(edit);   // 수정 버튼
            userDiv.appendChild(remove); // 삭제 버튼

            list.appendChild(userDiv);
        });
    } catch(e) {
        console.log(e);
    }
}

window.onload = getUser

document.getElementById('form').addEventListener('submit', 
async (e) => {
    e.preventDefault();                    // html tag의 기본 이벤트 막음
    const name = e.target.username.value;
    if(!name){ return alert('이름 입력 해야지요?'); }
    try{
        await axios.post('/user', {name}); // p195 10줄
        getUser();                         // list ui control
    } catch(err) {
        console.log(err);
    }
    e.target.username.value='';
});