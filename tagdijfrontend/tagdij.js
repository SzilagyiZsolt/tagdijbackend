document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    const dolgozoForm = document.getElementById("dolgozoForm");
    const dolgozoDiv = document.getElementById("ugyfellista");
    
    createButton.addEventListener("click", async function(){
        let baseUrl="http://localhost/tagdijbackend/index.php?ugyfel";
        const formdata= new FormData(document.getElementById("dolgozoForm")); 
        let options={
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response= await fetch(baseUrl, options);
    });
    readButton.addEventListener("click", async function(){
        
        
        dolgozoForm.classList.add("d-none");
        dolgozokDiv.classList.remove("d-none");
        let baseUrl="http://localhost/tagdijbackend/index.php?ugyfel";
        let options={
            method: "GET",
            mode: "cors"
        };
        let response= await fetch(baseUrl, options);
        if(response.ok){
            let data= await response.json();
            dolgozokListazasa(data);
        }
        else{
            console.error("Hiba a szerver válaszában!");
        }
    });

    function dolgozokListazasa(dolgozok){
        let dolgozokDiv= document.getElementById("ugyfellista");
        let tablazat = dolgozokFejlec();
        for(let dolgozo of dolgozok){
            tablazat+= dolgozoSor(dolgozo);
        }
        dolgozokDiv.innerHTML = tablazat+"</tbody> </table>";
    }
    function dolgozoSor(dolgozo){
        let sor=`<tr>
                    <td>${dolgozo.azon}</td>
                    <td>${dolgozo.nev}</td>
                    <td>${dolgozo.szuldatum}</td>
                    <td>${dolgozo.irszam}</td>
                    <td>${dolgozo.orsz}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" onclick="adatBetoltes(${dolgozo.azon})" id="select">Kiválaszt</button>
                    </td>
                </tr>`;
        return sor;
    }
    function dolgozokFejlec(){
        let fejlec=`<table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Azonosító</th>
                                <th>Név</th>
                                <th>Születési dátum</th>
                                <th>Irányítószám</th>
                                <th>Ország</th>
                                <th>Művelet</th>
                            </tr>
                        </thead>
                        <tbody>`;
        return fejlec;
    }
});