class LocationSerializer < ActiveModel::Serializer
    attributes :name, :longitude, :latitude, :id
    has_many :activities
end
  