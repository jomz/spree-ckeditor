/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.colorButton_enableMore = true;
	config.defaultLanguage = 'hr';
	//config.menu_groups = 'clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea';

	config.toolbar_Full =
	[
			['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'SpellChecker', 'Scayt'],
			['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
			['Link','Unlink','Anchor'],
			['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
			['Subscript','Superscript'], ['Maximize', 'ShowBlocks'],
			'/',
			['Styles','Format','Font','FontSize'],
			['Bold','Italic','Underline','Strike'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'], ['TextColor','BGColor'],
			['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
	];
	

};
