const app= Vue.createApp({
    data(){
        return ({
            books: [
                {
                    name: 'book 1',
                    author: 'John',
                    age: 23,
                    isFavorite: true

                },
                {
                    name: 'book 2',
                    author: 'John 2',
                    age: 24,
                    isFavorite: false
                },
                {
                    name: 'book 3',
                    author: 'John 3',
                    age: 25,
                    isFavorite: true
                }
            ],
            showBook: true
        })
    },
    computed: {
        favBooks(){
            return this.books.filter(book=>{
                return book.isFavorite;
            })
        },
        normalBooks(){
            return this.books.filter(book=>{
                return book.isFavorite===false;
            })
        }
    }

});
app.mount('#app');