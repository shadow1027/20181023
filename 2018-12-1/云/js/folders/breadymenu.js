/*
    面包屑
*/
// getParents(0);

function renderMenu(id){
    breadNav.innerHTML = '';
    let arr = getParents(id); //找到一堆祖先级数据
    let arr2 = getChild(id);//找一级儿子
    //有祖先级数据的情况下
    if(arr){
        arr.forEach((e,i,all)=>{

            if(i!=all.length-1){
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.innerHTML = e.title;
                a.onclick = function(){
                    console.log(arr2)
                    arr2 && arr2.forEach(e=>e.checked=false);
                    render(e.id);
                    renderMenu(e.id);
                }
                breadNav.appendChild(a);
            }else{
                let span = document.createElement('span');
                span.innerHTML = e.title;
                span.dataset.id = e.id;
                breadNav.appendChild(span);
            }   
        })
    }
}

renderMenu(0);


// // log(getParent(0))
