let baseUrl = "https://onpriceapi.herokuapp.com"

let divStores = document.getElementById("listStores")
let divProducts = document.getElementById("listProducts")

function login() {
    let name = document.getElementById("name").nodeValue
    let password = document.getElementById("password").nodeValue

    fetch(baseUrl + `/login?name=${name}&password=${password}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            window.href(`listProducts/${response.id}`)
        })
        .catch(error => {
            console.log(error)
        })
}

function listStores()
{
    console.log('oi')
    fetch(baseUrl + "/stores")
        .then(response => response.json())
        .then(response => {
            console.log(response)

            response.forEach(store => {
                let divCard = document.createElement("div")
                divCard.className = "card"

                let html = `
                <div class="card-body">
                    <h5 class="card-title">
                        ${store.name}
                    </h5>
                    <p class="card-text">
                    ${store.street} - ${store.number} - ${store.bairro} - ${store.city}/${store.uf}
                </p>
                <p class="card-text">
                    Aberto até: ${store.time}
                </p>
                <a href="listProducts/${store.id}" class="btn btn-primary">Buscar</a>
                    </div>`

                divCard.innerHTML = html

                divStores.appendChild(divCard)
            })

        })
        .catch(error => {
            console.log(error)
        })
}

function listProducts()
{
    let id_store = document.documentURI.split('/')[4]
    console.log(id_store)

    fetch(baseUrl + `/stores/products?id=${id_store}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(product => {
                divProduct = document.createElement("div")
                divProduct.className = "card"

                divProduct.innerHTML =  `
                <div class="card-body">
                    <h5 class="card-title">
                        <img src="../../images/icons/price.png" style="width: 20px; height: auto;">
                        ${product.name}
                    </h5>
                    <p class="card-text">
                        ${product.stamp} - ${product.price} - ${product.qt} ${product.unity}
                    </p>
                </div>
            `
                divProducts.appendChild(divProduct)
            })

        })
        .catch(error => {
            console.log(error)
        })
}