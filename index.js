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
    currentTab = tab;
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

function updateJobStatus(clickedElement, status) {
    const cardCountDiv = clickedElement.closest('.card-count'); 
    const statusBtn = cardCountDiv.querySelector('.status-btn');
    const statusBtnLink = statusBtn.querySelector('a');


    statusBtnLink.textContent = status.toUpperCase();
    statusBtn.className = 'btn status-btn'; 
    statusBtn.classList.add('status-' + status); 

    cardCountDiv.dataset.status = status;
    
    const interviewedBtn = cardCountDiv.querySelector('.interviewed');
    const rejectedBtn = cardCountDiv.querySelector('.rejected');

    if (status === 'interviewed') {
        interviewedBtn.classList.add('active');
        rejectedBtn.classList.remove('active');
    } else if (status === 'rejected') {
        rejectedBtn.classList.add('active');
        interviewedBtn.classList.remove('active');
    }

    updateCounts();
}


// counting function
function updateCounts(){
    const allJobCards = document.querySelectorAll('#all-container .card-count');
    const totalCount = document.getElementById('count-1');
    totalCount.innerHTML = allJobCards.length;

    const interviewedJobs = document.querySelectorAll('#all-container .card-count[data-status="interviewed"]');
    const rejectedJobs = document.querySelectorAll('#all-container .card-count[data-status="rejected"]');

    const interviewedCount = document.getElementById('count-2');
    const rejectedCount = document.getElementById('count-3');
    interviewedCount.innerHTML = interviewedJobs.length;
    rejectedCount.innerHTML = rejectedJobs.length;
    
    interviewedContainer.innerHTML = '';
    rejectedContainer.innerHTML = '';
    
    if (interviewedJobs.length > 0) {
        interviewedJobs.forEach(job => {
            const cardClone = job.closest('.card').cloneNode(true);
            interviewedContainer.appendChild(cardClone);
        });
    } else {
        interviewedContainer.innerHTML = `<div class="no-results-message">
                <img class="no-results" src="./no-results.png" alt="no-results.png">
                <p>No Interview Available</p>
            </div>`;
    }

    if (rejectedJobs.length > 0) {
        rejectedJobs.forEach(job => {
            const cardClone = job.closest('.card').cloneNode(true);
            rejectedContainer.appendChild(cardClone);
        });
    } else {
        rejectedContainer.innerHTML = `<div class="no-results-message">
                <img class="no-results" src="./no-results.png" alt="no-results.png">
                <p>No Interview Available</p>
            </div>`;
    }

}


document.addEventListener('DOMContentLoaded', function(){
    switchTab('all');
    updateCounts();
    
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('fa-trash-can')) {
            const clickedCard = event.target.closest('.card');
            if (!clickedCard) return;

            const cardCountDiv = clickedCard.querySelector('.card-count');
            if (!cardCountDiv || !cardCountDiv.id) return;

            const cardId = cardCountDiv.id;

            const originalCardElement = document.querySelector(`#all-container #${cardId}`);

            if (originalCardElement) {
                const originalCardToDelete = originalCardElement.closest('.card');
                if (originalCardToDelete) {
                    originalCardToDelete.remove();
                }
            }

            updateCounts();
        }
    });


})



