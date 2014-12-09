(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['popup'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<table>\n<caption>Summary for "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.Address : stack1), depth0))
    + "</caption>\n<tbody>\n	<tr>\n		<th>Active Count:</th><td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.ActiveCount : stack1), depth0))
    + "</td>\n	</tr>\n	<tr>\n		<th>Address:</th>\n		<td>\n			<address>\n			"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.Address : stack1), depth0))
    + "<br/>\n			"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.Borough : stack1), depth0))
    + ", NY "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.ZipCode : stack1), depth0))
    + "	\n			</address>\n		</td>\n	</tr>\n	<tr>\n		<th>Floors:</th><td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.NumFloors : stack1), depth0))
    + "</td>\n	</tr>\n	<tr>\n		<th>Total Floor Area:</th><td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.BldgArea : stack1), depth0))
    + "</td>\n	</tr>\n	<tr>\n		<th>Total Units:</th><td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.UnitsTotal : stack1), depth0))
    + "</td>\n	</tr>\n	<tr>\n		<th>Building Class:</th><td>"
    + escapeExpression(((helper = (helper = helpers.bldgDesc || (depth0 != null ? depth0.bldgDesc : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bldgDesc","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Year Built:</th><td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.YearBuilt : stack1), depth0))
    + "</td>\n	</tr>\n</tbody>\n</table>\n";
},"useData":true});
})();