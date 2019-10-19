window.onload = function () {
    let optList = document.getElementsByClassName("switch-opt");
    let conList = document.getElementsByClassName("switch-content");
    conList[0].classList.add('show');

    for(let i = 0; i < optList.length; i++) {
        optList[i].onclick = function () {
            let contentId = optList[i].getAttribute("data");
            clearShow();
            addShow(contentId)
        };
    }

    function clearShow() {
        for ( let i = 0; i < conList.length; i++ ) {
            conList[i].classList.remove('show');
        }
    }
    function addShow(id) {
        for ( let i = 0; i < conList.length; i++ ) {
            if(conList[i].getAttribute('data') === id) {
                conList[i].classList.add('show');
                break;
            }
        }
    }

};