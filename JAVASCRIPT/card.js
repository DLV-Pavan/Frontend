function fun() {
  let refElem = document.getElementById("ref");

  let name = "balayya";
  let age = 16;

  let card=`
            <div class="card">
                <img src="./alluarjun.png" alt="">
                <h1>Allu Arjun</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                </p>
                <button>Read More</button>
            </div>
        `
    let cards="";
    for(let i=0;i<=10;i++){
        cards+=card;
    }

    refElem.innerHTML=cards;
}