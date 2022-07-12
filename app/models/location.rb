class Location < ApplicationRecord
    has_many :trips
    has_many :activities

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :longitude, uniqueness: {scope: :latitude, message: "This location already exists."}
end
