class Bark < ActiveRecord::Base
	attr_accessible :barkee, :category, :content
	
	belongs_to :user
	
	validates :user_id, :presence => true
	
	default_scope :order => 'barks.created_at DESC'
end
