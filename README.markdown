SUMMARY
=======

General-purpose CKEditor functionality for Spree

Many Spree extensions require or allow use of a rich textarea editor
and bundle the editor as sort of a "black box" together with their
component.

That editor then goes out of date, doesn't integrate well into the site,
or is sub-par compared to better editors available.

This extension is an abstraction of an amazing word processor, CKEditor.
On top of a rich and usable interface, it supports in-place resizing of the
edit box and full screen mode.

As long as the component is
installed, everyone can call .editor() on a field to turn it into a
rich text editor. The editor is shown using jQuery.

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
        cd vendor/extensions && git clone git://github.com/docelic/spree-ckeditor.git ckeditor && cd ..

2. Install any missing deps and migrate database (none needed ATM)

        rake gems:install
        rake db:migrate

3. Launch Application

        script/server

Showing the editor
---------------

To show the editor on a page or within partial, place the following in
the page source:

    <% content_for :head do %>

      <%= javascript_include_tag 'jquery/jquery.js' %>  <--- NOT NEEDED

      <%= javascript_include_tag 'ckeditor/ckeditor.js' %>
      <%= javascript_include_tag 'ckeditor/adapters/jquery.js' %>
    
      <script type="text/javascript" charset="utf-8">
        var $j = jQuery.noConflict();
        $j(function() { $j('.editor').ckeditor(); });
      </script>
    <% end %>
    
    <%= f.text_area :body, {"style" => "width:500px", "class"=> "editor"} %>

Configuring the editor
---------------

To configure the editor, tune file public/javascripts/ckeditor/config.js.

The config file as shipped is ready for use and customizes the default
toolbar according to style found in popular word processors today.

The config file can be tuned to your liking.
Commenting the "config.toolbar_Full" definition will display the complete
toolbar.

For complete customization documentation, see [CKEditor Docs](http://docs.cksource.com/).

Known issues
---------------

 * CKEditor currently doesn't show menu icons when used from an outside component; fix pending

 * CKEditor crashes Galeon 2.0.7 (unrelated to the extension)

