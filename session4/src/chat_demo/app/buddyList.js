define(["dojo/aspect","dojo/dom","dojo/dom-construct","dojo/query","dojo/topic"],function(aspect,dom,domConstruct,query,topic){

	var buddylist = {
		id: "buddylist",
		list: dom.byId('buddylist'),
		ulList: null,
		mediator:null,
		setMediator:function(mediator){
			this.mediator = mediator;
		},
		init:function(mediator){

			this.setMediator(mediator);
			domConstruct.empty(this.list);
			this.ulList = domConstruct.create("ul",{},this.list);
			var buddys = this.mediator.getBuddys();
			for(var i =0; i<buddys.length; i++){
				domConstruct.create("li",{innerHTML:buddys[i].getName(),id:buddys[i].getId()},this.ulList);
			}

			aspect.before ( this.mediator,"onUserLogin" , function (newBuddy) { 
				mediator.writeStatus(newBuddy + " logged in");
				//domConstruct.create("li",{innerHTML:newBuddy.getName(),id:newBuddy.getId()},this.ulList);
			});
			
			aspect.before ( this.mediator,"onUserLogout" , function (leavingBuddy) { 
				domConstruct.destroy(dom.byId(leavingBuddy.getId()));
			});

		},
	}
	
	return buddylist;
});
