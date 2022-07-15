
        selectData();
        let id='no';
        localStorage.clear();
        function manageData(){
            document.getElementById('msg').innerHTML = '';
            let name = document.getElementById('name').value;
            if(name==''){
                document.getElementById('msg').innerHTML='Please enter your name';
            }
            else{
                console.log(id);
                if(id=='no'){
                    let arr = getData();
                    if(arr==null){
                        let data = [name];
                        localStorage.setItem('crud', JSON.stringify(data));
                    }
                    else{
                        arr.push(name);
                        setData(arr);
                    }
                    
                    document.getElementById('msg').innerHTML='Task Added';
                    
                }
                else{
                    let arr = getData();
                    arr[id] = name;
                    setData(arr);
                    document.getElementById('msg').innerHTML='Task Updated!';
                    id = 'no';

                }
                selectData();
                document.getElementById('name').value = '';
                
            }
        }
        function selectData(){
            let arr = getData();
            if(arr!=null){
                let html = '';
                let sno = 1;
                for(let k in arr){
                    html = html + `
                    <tr><td>${sno}</td><td>${arr[k]}</td><td id = "action" ><a href = "javascript:void(0)" onclick="deleteData(${k})">Delete</a></td><td id = "action" ><a href = "javascript:void(0)" onclick="editData(${k})">Edit</a></td></tr>`;
                    sno++;
                }
                document.getElementById('root').innerHTML = html;
            }
        }
        function editData(rid){
            id = rid;
            let arr = getData();
            document.getElementById('name').value = arr[rid];
        }
        function deleteData(rid){
            let arr = getData();
            arr.splice(rid, 1);
            setData(arr);
            selectData();
        }
        function getData(){
            let arr = JSON.parse(localStorage.getItem('crud'));
            return arr;
        }
        function setData(arr){
            localStorage.setItem('crud', JSON.stringify(arr));
        }