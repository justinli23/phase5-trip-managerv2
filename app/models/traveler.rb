class Traveler < ApplicationRecord
    has_many :trip_travelers
    has_many :trips, through: :trip_travelers
    belongs_to :user
    validates :name, presence: true
    validates :name, :email, uniqueness: true
end
