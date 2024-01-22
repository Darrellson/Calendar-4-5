
class Calendar {
    constructor() {
        this.currentDate = document.querySelector(".current-data");
        this.daysTag = document.querySelector(".days");
        this.prevNextIcon = document.querySelectorAll(".icons span");

        this.date = new Date();
        this.currYear = this.date.getFullYear();
        this.currMonth = this.date.getMonth();

        this.months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];

        this.loremIpsumText = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
        ];

        this.renderCalendar();
        this.addIconListeners();
    }

    renderCalendar() {
        let firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay();
        let lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
        let lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay();
        let lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth()
                && this.currYear === new Date().getFullYear();
            liTag += `<li class="${isToday ? 'active' : ''}" data-day="${i}" data-month="${this.currMonth}" data-year="${this.currYear}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
        }

        this.currentDate.innerText = `${this.months[this.currMonth]} ${this.currYear}`;
        this.daysTag.innerHTML = liTag;

        const days = document.querySelectorAll('.days li');
        days.forEach((day, index) => {
            day.addEventListener('click', () => {
                const dayOfMonth = day.getAttribute('data-day');
                const month = day.getAttribute('data-month');
                const year = day.getAttribute('data-year');
                const formattedDate = this.formatDate([dayOfMonth, parseInt(month) + 1, year], this.loremIpsumText[index]);
                console.log(`Clicked on ${formattedDate} - ${this.loremIpsumText[index]}`);
            });
        });
    }

    addIconListeners() {
        this.prevNextIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                this.currMonth = icon.id === "prev" ? this.currMonth - 1 : this.currMonth + 1;

                if (this.currMonth < 0 || this.currMonth > 11) {
                    this.date = new Date(this.currYear, this.currMonth);
                    this.currYear = this.date.getFullYear();
                    this.currMonth = this.date.getMonth();
                } else {
                    this.date = new Date();
                }
                this.renderCalendar();
            });
        });
    }

    formatDate(dateArray) {
        const formattedDate = dateArray.map(component => component < 10 ? `0${component}` : `${component}`).join('.');
        console.log(`${formattedDate}`);
    }
}

const calendar = new Calendar();

