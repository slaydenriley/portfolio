class PostCommentsSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {}

    @listing.to_json(options)


  end
end
