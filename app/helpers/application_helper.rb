module ApplicationHelper
  def page_title
    content_for?(:page_title) ? "Plate - #{content_for(:page_title)}" : "Plate - A simple rails boilerplate thingy"
  end

  def page_description
    (content_for?(:page_description) && content_for(:page_description)) \
      || "A template app as a boilerplate starting point for future apps"
  end

  def page_keywords
    (content_for?(:page_keywords) && content_for(:page_keywords)) \
      || "template, rails, compass, css, susy, fluid, fixed width, elastic, html5, css3, grid system, grid framework"
  end

  def page_scripts
    content_for(:page_scripts)
  end

  def input_field(&block)
    content_tag(:p, &block)
  end
end
