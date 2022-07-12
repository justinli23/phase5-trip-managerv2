class LocationSerializer < ActiveModel::Serializer
    attributes :name, :longitude, :latitude, :id, :first_trip
    has_many :activities

    def first_trip
        object.first_trip
    end

end
  