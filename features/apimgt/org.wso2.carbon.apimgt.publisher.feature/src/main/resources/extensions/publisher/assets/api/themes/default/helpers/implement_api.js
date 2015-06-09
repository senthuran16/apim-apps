/*
 *  Copyright (c) 2005-2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

var resources = function(page,meta){
	return {
		js:['jquery-validate.min.js', 
		'implement_api.js', 'underscore.js', 'jsonform.js', 'custom-validation.js',
		'url-validation.js','bootstrap-multiselect.js', 'bootstrap-editable.js', 'jsonpath-0.8.0.js',
		'endpoint-ui.js', 'handlebars.js', 'implement_api_design.js', 'implement_api_inline.js',
		'jquery-ace.min.js', 'src-noconflict/ace.js', 'src-noconflict/mode-javascript.js', 'typeaheadjs.js', 'bootstrap-dialog.min.js'],
		css:['bootstrap-multiselect.css','api_designer.css', 'bootstrap/bootstrap-editable.css', 'bootstrap-dialog.min.css'],
        code:['api_meta.hbs']
    };
};
