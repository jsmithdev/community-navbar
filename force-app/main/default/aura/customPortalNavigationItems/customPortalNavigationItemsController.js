({
	navigate: function (component, event) {
        console.log('AURA NAVIGATE')
        const id = event.getParam("menuItemId");
        console.log(id)
        if (id) {
            component.getSuper().navigate(id);
        }
    }
})