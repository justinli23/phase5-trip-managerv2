class Location < ApplicationRecord
    has_many :trip
    has_many :activity
end
