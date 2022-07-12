class Activity < ApplicationRecord
    belongs_to :location
    validates :name, presence: true
    validates :name, uniqueness: { scope: :location_id, message: "This location already has that activity listed."}
end
