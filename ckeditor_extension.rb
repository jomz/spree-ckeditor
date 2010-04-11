# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application'

class CkeditorExtension < Spree::Extension
  version "1.0"
  description "General-purpose CKEditor functionality for Spree"
  url "http://github.com/docelic/spree-ckeditor"

  # Please use ckeditor/config/routes.rb instead for extension routes.

  # def self.require_gems(config)
  #   config.gem "gemname-goes-here", :version => '1.2.3'
  # end
  
  def activate

    # make your helper avaliable in all views
    # Spree::BaseController.class_eval do
    #   helper YourHelper
    # end
  end
end
