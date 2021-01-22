class UserSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {:only => [:name, :email, :description]}

    @listing.to_json(options)

  end
end
