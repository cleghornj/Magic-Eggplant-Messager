function myEnterFunction(){
    targetEl = document.querySelector('#eggplant');
    psEl = document.querySelector('#ps');

    console.log("eggplant entered");
    psEl.setAttribute('particle-system',{enabled: true});
}

function myLeaveFunction(){
    targetEl = document.querySelector('#eggplant');
    psEl = document.querySelector('#ps');

    console.log("eggplant left");
    psEl.setAttribute('particle-system',{enabled: false});
}