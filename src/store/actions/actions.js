let actions = {
    asyncincrement(context, payload) {
        setTimeout(function () {
            context.commit("increment", payload);
        }, 100)
    }
}
export default actions;