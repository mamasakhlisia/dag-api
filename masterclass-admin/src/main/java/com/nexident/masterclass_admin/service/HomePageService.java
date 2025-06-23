package com.nexident.masterclass_admin.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexident.masterclass_admin.dto.HomeCard;
import com.nexident.masterclass_admin.entity.HomePage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

@Service
public class HomePageService {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${file.upload-dir}")
    private String uploadDir;

    private Path getContentFilePath(){
        return Paths.get(uploadDir, "home-content", "home-content.json");
    }

    public HomePage getContent(){
        try{
            Path filePath = getContentFilePath();
            System.out.println("Trying to access file at: " + filePath.toAbsolutePath());

            if(!Files.exists(filePath)){
                HomePage defaultContent = createDefaultContent();
                saveContent(defaultContent);
                return defaultContent;
            }

            return objectMapper.readValue(filePath.toFile(), HomePage.class);
        }catch(Exception e){
            throw new RuntimeException("Failed to read home content", e);
        }

    }

    public void saveContent(HomePage content){
        try{
            Path contentDir = getContentFilePath().getParent();
            if(!Files.exists(contentDir)){
                Files.createDirectories(contentDir);
            }
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(getContentFilePath().toFile(), content);
        }catch (Exception e){
            throw new RuntimeException("Failed to save home content", e);
        }
    }

    private HomePage createDefaultContent() {
        HomePage content = new HomePage();
        content.setNavHeader("გაამაგრე შენი ცოდნა და გამოცდილება ჩვენი პროფესიონალების მიერ ჩატარებული მასტერკლასებით");
        content.setNavParagraph("შეისწავლეთ უახლესი ტექნოლოგია მსოფლიოში აღიარებული სტომატოლოგიური პროფესიონალებისგან და გააღმავეთ თქვენი უნარები.");
        content.setAbout(Arrays.asList(
                "ჩვენი მასტერკლასები არის ინტენსიური, პრაქტიკული სავარჯიშოებით სავსე, შექმნილი პროფესიონალებისთვის ვისაც სურს საკუთარი შესაძლებლობების გამტკიცება",
                "ჩვენი მასტერკლასებს ატარებენ საერთაშორისოდ აღიარებული ინსტრუქტორები, გადმოგცემენ ათწლეულების დაგროვებულ კლინიკურ გამოცდილებას და გადმოგცემენ პროფესიონალურ ცოდნას. ჩვენ დიდ ყურადღებას ვაქცევთ პრაქტიკულ, მალევე დანერგვად ტექნიკებს რომლებიც გამოგადგებათ მასტერკლასის დამთავრებისთანავე ",
                "მწირი რაოდენობის მოსწავლეებით და საუკეთესო დონის აპარატურით, ყველა მონაწილეს ექნება პერსონალიზირებული ყურადღება და ოპტიმალური სწავლის პირობები"
        ));
        content.setCards(Arrays.asList(
                new HomeCard("სახელი", "აუცილებელი ინფორმაცია ამის შესახებ")
        ));
        content.setRatings(Arrays.asList(
                new HomeCard("სახელი და გვარი", "შეუდარებელი მასტერკლასი, უმალცე შევძელი ცოდნის გამოყენება")
        ));

        content.setFooterText("რენდომ ტექსტი კომპანიის შესახებ");
        content.setFacebook("https://facebook.com/masterclass");
        content.setLinkedIn("");
        content.setInstagram("");
        return content;
    }
}
