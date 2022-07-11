class TravelerSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthdate, :email, :image, :phone
end
