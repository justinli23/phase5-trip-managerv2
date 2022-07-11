require "byebug"
class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :image, :activities
  belongs_to :location
  has_many :trip_travelers
  has_many :travelers, through: :trip_travelers

  def activities
    object.activities
  end
end
