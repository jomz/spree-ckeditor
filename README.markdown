SUMMARY
=======

General-purpose CKEditor functionality for Spree

Many Spree extensions require or allow use of a rich textarea editor
and bundle the editor as sort of a "black box" together with their
component.

This extension is an abstraction of that editor. As long as it is
installed, everyone can call .editor() on a field to turn it into a
rich text editor.

Extension maintenance Davor Ocelic, [Spinlock Solutions](http://www.spinlocksolutions.com) .

Refer to the [Spree ecommerce project page](http://spreecommerce.com) 
to learn more.

Refer to the [CKEditor - WYSIWYG Text and HTML Editor for the Web](http://ckeditor.com) 
to learn more.

QUICK START
===========

Installing the extension
---------------

1. extension install OR git clone:

        script/extension install git://github.com/docelic/spree-ckeditor.git
        cd vendor/extensions && git clone git://github.com/docelic/spree-ckeditor.git ckeditor

2. Install any missing deps and migrate database

        rake gems:install
        rake db:migrate

3. Launch Application

        script/server

Showing the editor
---------------

    <% content_for :head do %>
      <%= javascript_include_tag 'jquery/jquery.js' %>
      <%= javascript_include_tag 'ckeditor/ckeditor.js' %>
      <%= javascript_include_tag 'ckeditor/adapters/jquery.js' %>
    
      <script type="text/javascript" charset="utf-8">
        var $j = jQuery.noConflict();
        $j(function() { $j('.editor').ckeditor(); });
      </script>
    <% end %>
    
    <%= f.text_area :body, {"style" => "width:500px", "class"=> "editor"} %>

