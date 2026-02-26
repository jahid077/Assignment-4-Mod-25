let currentTab = "all";

const tabActive = {
    backgroundColor: '#3b82f6',
    color: '#fff'
};

const tabInactive = {
    backgroundColor: '#fff',
    color: '#64748b'
};


const allContainer = document.getElementById('all-container');
const interviewedContainer = document.getElementById('interviewed-container');
const rejectedContainer = document.getElementById('rejected-container');

// console.log(allContainer, interviewedContainer, rejectedContainer);

function switchTab(tab){
    // console.log(tab);
    const tabs = ["all", "interviewed", "rejected"];
    
    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        // console.log(tabName);
        if(t === tab){
            tabName.style.backgroundColor = tabActive.backgroundColor;
            tabName.style.color = tabActive.color;
        }else{
            tabName.style.backgroundColor = tabInactive.backgroundColor;
            tabName.style.color = tabInactive.color;
        }
    }

    allContainer.style.display = 'none';
    interviewedContainer.style.display = 'none';
    rejectedContainer.style.display = 'none';

    if(tab === 'all'){
        allContainer.style.display = 'block';
    }else if(tab === 'interviewed'){
        interviewedContainer.style.display = 'block';
    }else if(tab === 'rejected'){
        rejectedContainer.style.display = 'block';
    }



}


document.addEventListener('DOMContentLoaded', function(){
    switchTab('all');
})