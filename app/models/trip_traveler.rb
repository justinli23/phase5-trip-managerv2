class TripTraveler < ApplicationRecord
    belongs_to :trip
    belongs_to :traveler
    validates :trip_id, uniqueness: { scope: :traveler_id,
    message: "Traveler cannot be added to trip multiple times" }
end
