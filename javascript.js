let app = new function () {
    this.el = document.getElementById('products');
    this.listProduct = ["Nokia", "Xaomi"];
    this.count = function (data) {
        let el = document.getElementById('counter');
        let name = 'product';
        if (data) {
            if (data > 1) {
                name = 'products';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };
    this.fetchAll = function () {
        let data = '';
        if (this.listProduct.length > 0) {
            for (let i = 0; i < this.listProduct.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + '</td>';
                data += '<td>' + this.listProduct[i] + '</td>';
                data += '<td><button onclick="app.editProduct(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.deleteProduct(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.count(this.listProduct.length);
        return this.el.innerHTML = data;
    };
    this.addProduct = function () {
        let el = document.getElementById('add-name');
        let product = el.value;
        if (product) {
            this.listProduct.push(product.trim());
            el.value = '';
            this.fetchAll();
        }

    };
    this.deleteProduct = function (name) {
        this.listProduct.splice(name, 1);
        this.fetchAll();
    };
    this.editProduct = function (name) {
        let el = document.getElementById('edit-name');
        el.value = this.listProduct[name];
        document.getElementById('default_hidden').style.display='block';
        let now = this;
        document.getElementById('saveEdit').onsubmit = function () {
            let new_name_product = el.value;
            if (new_name_product) {
                now.listProduct.splice(name, 1, new_name_product.trim());
                now.fetchAll();
                closeInput();
            }
        }

    }
};
app.fetchAll();
function closeInput() {
    document.getElementById('default_hidden').style.display='none';
}

