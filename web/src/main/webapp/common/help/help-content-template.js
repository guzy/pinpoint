(function(){ 
	'use strict';
	var template = [
	    '<div class="pinpoint-tooltip" style="{{mainStyle}}">',
	    	'<dl>',
	    		'<dt>{{{title}}}</dt>',
	    		'<dd>{{{desc}}}</dd>',
	    	'</dl>',
	    	'{{#if category}}<hr/>{{/if}}',
	    	'{{#each category}}',
	            '<p>{{title}}</p>',
	            '{{#if image}}<p style="text-align:center">{{{image}}}</p>{{/if}}',
	            '{{#if items}}',
		            '<table>',
		            	'{{#each items}}',
			            	'<tr>',
			            		'<td>{{{name}}}</td>',
			            		'<td>{{{desc}}}</td>',
			            	'</tr>',
		            	'{{/each}}',
		            '</table>',
		         '{{/if}}',
		         '{{#if list}}',
		         	'<ul>',
		         	'{{#each list}}',
		         		'<li>{{{this}}}</li>',
		         	'{{/each}}',
		         	'</ul>',
		         '{{/if}}',
	        '{{/each}}',
	    '</div>'
	].join("");
	var compiledTemplate = Handlebars.compile( template );
	
	pinpointApp.constant('helpContentTemplate', compiledTemplate );
})();