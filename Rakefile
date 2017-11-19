task :build do
  system 'bundle exec jekyll build'
  Rake::Task['generate_tag_pages'].invoke
  system 'bundle exec jekyll build'
end

task :generate_tag_pages do
  TagGenerator.run
end

module TagGenerator
  def self.run
    # Create containing folders
    tags_folder_path = File.expand_path("tags", __dir__)
    Dir.mkdir(tags_folder_path) unless File.exists?(tags_folder_path)

    # Read Tags into array
    tags = []
    taglist_path = File.expand_path("_site/tags/taglist.txt", __dir__)
    File.open(taglist_path, 'r') do |f|
      while tag = f.gets
        tag = tag.strip
        tags << tag unless tag == "" || tag == "\n"
      end
    end

    # Create template files for each tag
    for tag in tags
      tag_path = tag.downcase.gsub!(' ','-')
      tag_page_path = tags_folder_path + "/#{tag_path}.md"
      write_template_file(tag_page_path, "tags/#{tag_path}/", tag, { tag: tag })
    end
  end

  def self.write_template_file(path, permalink, title, options={})
    unless File.exists?(path)
      File.open(path, 'w') do |f|
        f.puts "---"
        f.puts "layout: tag"
        f.puts "permalink: '#{permalink}'"
        f.puts "title: '#{title}'"
        options.each do |k, v|
          f.puts "#{k}: '#{v}'"
        end
        f.puts "---"
      end
      puts "created tag page for #{title}"
    end
  end
end
