class PostSerializer
  def initialize(listing_object)
    @listing = listing_object
  end

  def to_serialized_json
    options = {:only => [:title, :content, :user_id]}

    @listing.to_json(options)


  end
end
