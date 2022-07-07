class Trip < ApplicationRecord
    has_many :trip_travelers
    has_many :travelers, through: :trip_travelers
    belongs_to :location
end
