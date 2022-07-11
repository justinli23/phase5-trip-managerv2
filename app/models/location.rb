class Location < ApplicationRecord
    has_many :trips
    has_many :activities
end
