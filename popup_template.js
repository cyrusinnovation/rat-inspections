(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['popup'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<table>\n<caption>Summary for "
    + escapeExpression(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Address","hash":{},"data":data}) : helper)))
    + "</caption>\n<tbody>\n	<tr>\n		<th>Active Count:</th><td>"
    + escapeExpression(((helper = (helper = helpers.ActiveCount || (depth0 != null ? depth0.ActiveCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ActiveCount","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Address:</th>\n		<td>\n			<address>\n			"
    + escapeExpression(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Address","hash":{},"data":data}) : helper)))
    + "<br/>\n			"
    + escapeExpression(((helper = (helper = helpers.Borough || (depth0 != null ? depth0.Borough : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Borough","hash":{},"data":data}) : helper)))
    + ", NY "
    + escapeExpression(((helper = (helper = helpers.ZipCode || (depth0 != null ? depth0.ZipCode : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ZipCode","hash":{},"data":data}) : helper)))
    + "	\n			</address>\n		</td>\n	</tr>\n	<tr>\n		<th>Floors:</th><td>"
    + escapeExpression(((helper = (helper = helpers.NumFloors || (depth0 != null ? depth0.NumFloors : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"NumFloors","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Total Floor Area:</th><td>"
    + escapeExpression(((helper = (helper = helpers.BldgArea || (depth0 != null ? depth0.BldgArea : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"BldgArea","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Total Units:</th><td>"
    + escapeExpression(((helper = (helper = helpers.UnitsTotal || (depth0 != null ? depth0.UnitsTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"UnitsTotal","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Building Class:</th><td>"
    + escapeExpression(((helper = (helper = helpers.BldgClass || (depth0 != null ? depth0.BldgClass : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"BldgClass","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n	<tr>\n		<th>Year Built:</th><td>"
    + escapeExpression(((helper = (helper = helpers.YearBuilt || (depth0 != null ? depth0.YearBuilt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"YearBuilt","hash":{},"data":data}) : helper)))
    + "</td>\n	</tr>\n</tbody>\n</table>\n";
},"useData":true});
})();