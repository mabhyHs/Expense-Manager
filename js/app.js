function OpenTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

/*SECCION GASTOS */

const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const divButton = document.getElementById("colAcciones");
class UI {
    constructor() {
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.descriptionInput = document.getElementById("description-input");
        this.expenseList = document.getElementById("expense-list");

        this.itemList = [];
        this.itemID = 0;
    }

    // submit budget method
    submitBudgetForm() {
        const value = this.budgetInput.value;

        if (value === "" || value < 500) {
            alert('El Valor no puede estar vacío, ser negativo, ni menor a $500');
        } else {
            this.budgetInput.textContent = value;
            this.budgetInput.value = value;
            this.budgetInput.classList.add("form-control-plaintext");
            this.showBalance();
        }
    }

    //check balance
    showBalance() {
        const expense = this.totalExpense();
        const total = parseInt(this.budgetInput.textContent) - expense;
        this.balanceAmount.textContent = total;
        if (total < 0) {
            this.balance.classList.remove("showGreen", "showBlack");
            this.balance.classList.add("showRed");
        } else if (total > 0) {
            this.balance.classList.remove("showRed", "showBlack");
            this.balance.classList.add("showGreen");
        } else if (total === 0) {
            this.balance.classList.remove("showRed", "showGreen");
            this.balance.classList.add("showBlack");
        }
    }

    // submit expense
    submitExpenseForm() {
            let expenseValue = this.expenseInput.value;
            let amountValue = this.amountInput.value;
            let descriptionValue = this.descriptionInput.value;
            console.log(amountValue);

            if (descriptionValue === "") {
                descriptionValue = expenseValue;
            }
            if (expenseValue === "" || amountValue === "" || amountValue < 0) {
                alert('El monto no puede estar vacío o con un numero negativo');
            } else {
                let amount = parseInt(amountValue);
                this.expenseInput.value = "";
                this.amountInput.value = "";
                this.descriptionInput.value = "";
                let expense = {
                    id: this.itemID,
                    title: expenseValue,
                    amount: amount,
                    description: descriptionValue

                };
                this.itemID++;
                this.itemList.unshift(expense);
                this.addExpense(expense);
                this.showBalance();
            }
        }
        // add expense
    addExpense(expense) {

            const div = document.createElement("li");
            div.innerHTML = `<div class="d-flex justify-content-between align-items-baseline">
                                    <div class="col-md-3">
                                         ${ expense.title}
                                    </div>
                                    <div class="col-md-3" id="hiddenMobile">
                                        ${expense.description}
                                    </div>
                                    <div class="col-md-3">
                                         ${expense.amount} 
                                    </div>                
                                    <!-- icons -->
                                    <div class="col-md-3 edit-icon">
                                    <button type="button" class="edit-icon agregarBtn  btnEditar" data-id="${expense.id}">
                                    <i>Editar |</i>
                                    </button>
                                    <button type="button" class="delete-icon agregarBtn btnEditar" data-id="${expense.id}">
                                    <i>Borrar</i>
                                </button>
                                </div>
                             </div>
   `;
            this.expenseList.appendChild(div);
            this.expenseForm.querySelector('button[type="submit"]').textContent = 'Agregar';
            this.expenseForm.querySelector('button[type="cancel"]').style.display = "none";;


        }
        //calculate total expense
    totalExpense() {
            let total = 0;
            if (this.itemList.length > 0) {
                total = this.itemList.reduce(function(acc, curr) {
                    acc += curr.amount;
                    return acc;
                }, 0);
            }
            return total;
        }
        // edit expense
    editExpense(element) {
            let id = parseInt(element.dataset.id);

            let parent = element.parentElement.parentElement.parentElement;
            // remove from dom
            this.expenseList.removeChild(parent);

            //remove from list;
            let expense = this.itemList.filter(function(item) {
                return item.id === id;
            });



            // show value
            this.expenseInput.value = expense[0].title;
            this.amountInput.value = expense[0].amount;
            this.descriptionInput.value = expense[0].description;


            // delete item
            let tempList = this.itemList.filter(function(expense) {
                return expense.id !== id;
            });
            this.itemList = tempList;
            this.showBalance();
            this.expenseForm.querySelector('button[type="submit"]').textContent = 'Aceptar';
            this.expenseForm.querySelector('button[type="cancel"]').style.display = "inline-block";;



        }
        //delete expense
    deleteExpense(element) {
        let id = parseInt(element.dataset.id);
        console.log(id);
        let parent = element.parentElement.parentElement.parentElement;
        // remove from dom
        this.expenseList.removeChild(parent);

        // delete item
        let tempList = this.itemList.filter(function(expense) {
            return expense.id !== id;
        });

        this.itemList = tempList;
        this.showBalance();
    }
}
const ui = new UI();

function eventListeners() {
    budgetForm.addEventListener("submit", submitBudgetF);
    expenseForm.addEventListener("submit", submitExpenseF);
    expenseList.addEventListener("click", adminExpense);
}

function submitBudgetF(e) {
    e.preventDefault();
    ui.submitBudgetForm();
};

function submitExpenseF(e) {
    e.preventDefault();
    ui.submitExpenseForm();
}

function adminExpense(e) {
    if (e.target.parentElement.classList.contains("edit-icon")) {
        ui.editExpense(e.target.parentElement);
    } else if (e.target.parentElement.classList.contains("delete-icon")) {
        ui.deleteExpense(e.target.parentElement);
    }
};

document.addEventListener("DOMContentLoaded", function() {
    eventListeners();
});