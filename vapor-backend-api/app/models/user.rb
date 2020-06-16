class User < ApplicationRecord
    has_many :posts
    belongs_to :image
    validates :username, presence: true
    validates :username, uniqueness: true
end
