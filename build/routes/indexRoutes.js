var express=require("express"),indexRouter=express.Router();indexRouter.route("/").get(function(e,r){r.render("Index",{title:"INSTAR Wiki",breadcrumbs:'<li class="breadcrumb-item"><a href="/">Home</a></li>'})}),module.exports=indexRouter;